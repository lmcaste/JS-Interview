import {extendObservable, action} from 'mobx';
import { getRepos, getUserData } from '../../github-api.js';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'JS Interview WebApp Project',
      username: '',
      loading: false,
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
      const res = await getRepos(userName);
      if (res.message === 'Not Found') {
        console.log('oops')
      }
      else {
        this.userRepos = res;
        this.setLoader(false);
      } 
    }
  });

  userOrganizations = action(async userData => {
    if (userData || userData !== "" || userData !== null) {
      this.setLoader(true);
      const data = await getUserData(userData);
      this.userOrgs = data.orgs;
      this.setLoader(false);
    }
  });
}

export default AppStore;