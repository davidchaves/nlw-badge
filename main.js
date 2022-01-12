const linksSocialMedia = {
  github: 'NilZila',
  youtube: 'gN3l63M2sfJdNZE_ZsIWaQ',
  facebook: 'David Willian',
  instagram: 'dvdwilli',
  twitter: '',
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos();

//ARROW FUNCTIONS
