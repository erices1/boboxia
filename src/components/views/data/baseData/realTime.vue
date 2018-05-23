<template>
	<div>
		<div class="top-blue-data">
			<Row type="flex" justify="space-between">
				<Col span="3" class="blue-child"  v-for='item in blueData' :key="item.name">
					<div class="ifbox">
						<h3>{{item.value}}</h3>
						<p>{{item.name}}</p>
						<p>日（{{item.rate}}）</p>
					</div>
				</Col>
			</Row>
		</div>
		<div class="box-common">
			<div class="title">
				<h3>小时数据</h3>
			</div>
			 <div class="content">
				45645645654546
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      blueData: [
        {
          name: "新增设备",
          value: 0,
          rate: 0
        },
        {
          name: "平台新增注册",
          value: 0,
          rate: 0
        },
        {
          name: "游戏新增注册",
          value: 0,
          rate: 0
        },
        {
          name: "新增/首次创角",
          value: 0,
          rate: 0
        },
        {
          name: "老活跃",
          value: 0,
          rate: 0
        },
        {
          name: "付费人数",
          value: 0,
          rate: 0
        },
        {
          name: "充值金额",
          value: "0%",
          rate: 0
        }
      ]
    };
  }
};
</script>
<style scoped>
.top-blue-data {
  padding-top: 10px;
  margin-bottom: 20px;
}
.top-blue-data .blue-child .ifbox {
  height: 95px;
  background: #2d8cf0;
  color: #fff;
  text-align: center;
  border-radius: 5px;
}
.top-blue-data .blue-child .ifbox h3 {
  font-size: 18px;
  padding-top: 10px;
}
.top-blue-data .blue-child .ifbox p {
  font-size: 14px;
}
</style>