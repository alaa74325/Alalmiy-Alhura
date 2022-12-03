<template>
      <div>
        <homeSliderHome/>
        <homeAboutUs/>
        <homeLastProjects/>
        <homeOurServices/>
        <homeTools/>
        <homeFeedback/>
        <homeWhyUS/>
        <homePartners/>
        <homeSubscribe/>
        <homeWhatHappen/>
        <homeFormCom/>
      </div>
</template>

<script>
import LastProjects from '../components/home/LastProjects.vue'
import OurServices from '../components/home/ourServices.vue'
import Tool from '../components/home/tool.vue'
import WhatHappen from '../components/home/whatHappen.vue'
export default {
  components: { LastProjects, OurServices, Tool, WhatHappen },
  name: 'IndexPage',
}
</script>
