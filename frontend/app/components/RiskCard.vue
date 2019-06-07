//<template>
  <section>
    <h1>Risk</h1>
    <div style="display: inline-block;">
      <h2 id="base" style="display: inline-block; color: black !important" >{{ $store.state.baseRepo }}</h2>
      <h2 style="display: inline-block;" class="repolisting" v-if="$store.state.comparedRepos.length > 0"> compared to: </h2>
      <h2 style="display: inline-block;" v-for="(repo, index) in $store.state.comparedRepos">
        <span id="compared" v-bind:style="{ 'color': colors[index] }" class="repolisting"> {{ repo }} </span>
      </h2>
    </div>
    <h2 class="col" style="margin-bottom:20px">CII Best Practices</h2>
    <button id="ciiBtn" style="border:2px solid black; width:100%">Retrieve CII information</button>
    <div id="overcii" style="text-align:center;width:100%;display:none;">
        <img class="col" width="200px" height="200px"
        src="https://i.ibb.co/n8f7NjX/CIITPARENT.png"
        href="https://bestpractices.coreinfrastructure.org/en"
        style="width:419px;height:146px;margin-left: auto;margin-right: auto;">
        <br>
        <div id = "recloadContainer">
        <div id="CIIbp" style="margin-left: auto;margin-right: auto;margin-top:20px;" class="col-6">
            <div size="total">
            <img id="CIIbadge" style="transform: scale(2)">
            <br>
            <div id="CIIbp" style="margin-left: auto;margin-right: auto;margin-top:20px;" class="col-6">
            <div size="total">
            <img id="CIIbadge" style="height:50px">
            <br>
            <h2 id="CII"></h2>
            </div>
        </div></div></div>
        <!--<div id="CIIbp" class="col-6">
            <div size="total">
            <img id="CIIbadge2">
            <p id="CII2"></p>
            </div>
        </div>-->
    </div></div>

    <div class="row">
        <button id="lcBtn" style="border:2px solid black; width:600px">Scan this repository for license information</button>
        <p id="populate"></p>
        <p id="licenseInfo"></p>
        <table id="licenseTable">
            <tbody></tbody>
        </table>
        <table id="licenseTableLI">
            <tbody></tbody>
        </table>
    </div>
    </div>
  </section>
</template>
<script>

import RiskCard from 'RiskCard.js'

module.exports = {
    data() {
        return {
            colors: ["#FF3647", "#4736FF","#3cb44b","#ffe119","#f58231","#911eb4","#42d4f4","#f032e6"]
        }
    },
    components: {
        //RiskChart
    },
    mounted() {
        window.onload = RiskCard()
        
    },
    watch: {
    '$route': function (to, from) {
      if (to.path != from.path)
        window.location.reload()
        // window.location.replace(to.path)
    }
  },
}
</script>
