import {extendObservable, action} from 'mobx';
import { getRepos, getUserData } from '../../github-api.js';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'JS Interview WebApp Project',
      userName: '',
      userRepos: [],
      userOrgs: []
    });
  }

  setTitle = action(title => {
    this.title = title;
  });

  userRepositories = action(async userName => {
    if (userName || userName !== "" || userName !== null) {
      const res = await getRepos(userName);
      this.userRepos = res;
    }
  });

  async userOrganizations(userData) {
    if (userData || userData !== "" || userData !== null) {
      const data = await getUserData(userData);
      this.userOrgs = data.orgs;
      
    }
  }
}

export default AppStore;