<template>
  <nav class="tabs">
        <ul>
          <li :class="{ active: (currentTab == 'rails/rails') }"><a href="#" @click="changeTab" data-value="rails/rails">rails</a></li>
          <li :class="{ active: (currentTab == 'twitter/twemoji') }"><a href="#" @click="changeTab" data-value="twitter/twemoji">twemoji</a></li>
          <!-- <li :class="{ active: (currentTab == 'git'), hidden: !gitRepo }"><a href="#" @click="changeTab" data-value="git">Git</a></li> -->
        </ul>
      </nav>
</template>

<script>
module.exports = {
  props: ['owner', 'repo', 'comparedowner', 'comparedrepo', 'groupid'],
  computed: {
    gitRepo () {
      return this.$store.state.gitRepo
    },
    currentTab () {
      return this.$store.state.tab
    },
    baseRepo () {
      return this.$store.state.baseRepo
    },
    comparedRepos () {
      return this.$store.state.comparedRepos
    }
  },
  methods: {
    changeTab (e) {
      console.log("changing tab to: ", e.target.dataset.value)
      this.$store.commit('setTab', {
            tab: e.target.dataset.value
          })
        let ownrepo = e.target.dataset.value.split("/")
        let owner = ownrepo[0]
        let repo = ownrepo[1]
        let name = 'risk'
        this.$router.push({
          name,
          params: {owner, repo}
      })
      this.$store.commit('setRepo', {
        githubURL: e.target.dataset.value
      })
      window.location.reload()
    }
    },
  };
</script> 