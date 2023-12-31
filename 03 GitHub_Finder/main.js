class GitHubAPI {
  constructor(URL = 'https://api.github.com'){
    this.URL = URL;
  }

  async getUser(username){ // username으로 api 조회
    const response = await fetch(`${this.URL}/users/${username}`); // 사용자 정보 요청

    if(response.status === 404) {
      console.log(`Error fetching data: ${response.statusText}`);
      return '';
    }
    else{
      const data = await response.json(); // json형식으로 파싱
      return data;
    }
  }

  async getRepos(username){ // username으로 api 조회
    const response = await fetch(`${this.URL}/users/${username}/repos`); // 사용자 정보 요청

    if(response.status === 404) {
      console.log(`Error fetching data: ${response.statusText}`);
      return '';
    }
    else{
      const repos = await response.json(); // json형식으로 파싱
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      return repos;
    }
  }
}

function SearchProfile(event){
  if(event.keyCode === 13){
    const name = event.target.value.trim();
    
    if(name) {
      const userinfo = new GitHubAPI();
      const NoInformation = `<strong>No Information</strong>`;

      userinfo.getUser(name)
      .then(data => {
        document.getElementById('pic').src = data.avatar_url ? data.avatar_url : './assets/user.png';
        document.getElementById('public_repos').textContent = `Public Repos: ${data.public_repos}`;
        document.getElementById('public_gists').textContent = `Public Gists: ${data.public_gists}`;
        document.getElementById('followers').textContent = `Followers: ${data.followers}`;
        document.getElementById('followings').textContent = `Followings: ${data.following}`;

        document.getElementById('company').innerHTML = data.company ? `Company: <strong>${data.company}</strong>` : 'Company: ' + NoInformation;
        document.getElementById('blog').innerHTML = data.blog ? `Website/Blog: <strong>${data.blog}</strong>` : 'Website/Blog: ' + NoInformation;
        document.getElementById('location').innerHTML = data.location ? `Location: <strong>${data.location}</strong>` : 'Location: ' + NoInformation;
        document.getElementById('member_since').innerHTML = data.created_at ? `Member Since: <strong>${data.created_at.split('T')[0]}</strong>` : 'Member Since: ' + NoInformation;
      })
      .catch(error => {
        console.log('There was an error fetching the data: ', error);
});
    }
  }
}

function SearchRepos(event){
  if(event.keyCode === 13){
    const name = event.target.value.trim();
    const footer = document.getElementById('footer');
    
    if(name) {
      const repo_container = document.getElementById('repo-container');
      repo_container.innerHTML = '';
      
      const userrepos = new GitHubAPI();
      userrepos.getRepos(name)
      .then(repos => {
        if(repos.length !== 0){
          footer.style.position = 'sticky';
        }
        else{
          footer.style.position = 'fixed';
        }
        repos.forEach(repo => {
        let repolist = document.createElement('div');

        repolist.setAttribute("class", "repo-content");
        repolist.innerHTML = `
        <span id="repo-title" class="repo-title">${repo.name}</span>
        <div class="repo-staus">
          <span id="stars" class="status" style="background-color: cornflowerblue;">Stars: <strong>${repo.stargazers_count}</strong></span>
          <span id="watchers" class="status" style="background-color: grey">Watchers: <strong>${repo.watchers}</strong></span>
          <span id="forks" class="status" style="background-color: mediumseagreen">Forks: <strong>${repo.forks}</strong></span>
        </div>
        `;
        repo_container.appendChild(repolist);
        })
      })
      .catch(error => {
        console.log('There was an error fetching the data: ', error);
});
    }
  }
}

function SearchEvent(event) {
  SearchProfile(event);
  SearchRepos(event);
}

document.getElementById('username').addEventListener('keydown', SearchEvent);
