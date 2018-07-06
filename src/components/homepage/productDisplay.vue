<template>
<div class="productDisplay">



</div>
</template>

<script>
export default {
    data() {
        return {
            items:[

            ],
            headerImageUrl:'',
            currentPage:1,
            totalCount:0,
            pageSize:6
        }
 },
created: function() {
    this.request();
  },
  methods: {
      currentPageChanged(val) {
          this.currentPage = val;
              this.request();
        console.log(`当前页: ${val}`);
      },
      request() {
              var that = this;
            this.$ajax.get('/productShower', {
                params: {
                    page:this.currentPage,
                    pageSize:this.pageSize
                }

            })
            .then(function (response) {
            console.log(response);
            that.items = response.data.model.products;
            that.totalCount = response.data.model.totalCount
            that.headerImageUrl = response.data.model.headerImageUrl
            })
            .catch(function (response) {
            console.log(response);
            });
      }
  }
}
</script>
