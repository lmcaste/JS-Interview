import {extendObservable, action} from 'mobx';
import { getRepos, getUserData } from '../../github-api.js';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'JS Interview WebApp Project',
      username: '',
      loading: false,
      error: false,
      userRepos: [],
      userOrgs: []
    });
  }

  setTitle = action(title => {
    this.title = title;
  });

  setLoader = action(loading => {
    this.loading = loading;
  });

  userRepositories = action(async userName => {
    if (userName || userName !== "" || userName !== null) {
      this.setLoader(true);
      try {
        const res = await getRepos(userName);
        this.userRepos = res;
        this.setLoader(false);
      } catch(err) {
        this.userRepos = [];
        this.error = true;
      }
      finally {
        this.setLoader(false);
      }
    }
  });

  userOrganizations = action(async userData => {
    if (userData || userData !== "" || userData !== null) {
      this.setLoader(true);
      try {
        const data = await getUserData(userData);
        this.userOrgs = data.orgs;
        this.setLoader(false);
      } catch(err) {
        this.userOrgs = [];
        this.error = true;
      }
      finally {
        this.setLoader(false);
      }
    }
  });
}

export default AppStore;