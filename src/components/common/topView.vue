<template>
  <div class="top-box">
      <ul>
          <li class="btn item">
            <Button type="info" @click="addChannel">新增</Button>
            <Button type="success">审核</Button>
            <Button type="error">禁用</Button>
          </li>
          <li class="item">
            <div class="left-tit">渠道状态：</div>
            <div class="right-con">
                <Select v-model="channelStateChoese" style="width: auto">
                    <Option v-for="item in channelStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
          </li>
          <li class="item">
            <div class="left-tit">渠道等级：</div>
            <div class="right-con">
                <Select v-model="channelStepChoese" style="width: auto">
                    <Option v-for="item in channelStep" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
          </li>
          <li class="item">
            <div class="left-tit">系统：</div>
            <div class="right-con">
                <Select v-model="systemChoese" style="width: auto">
                    <Option v-for="item in system" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
          </li>
          <li class="item">
            <div class="left-tit">平台专员：</div>
            <div class="right-con">
                <Select style="width: auto" filterable>
                    <Option v-for="item in pepole" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
          </li>
          <li class="item">
            <div class="left-tit">渠道名称：</div>
            <div class="right-con">
                <Select style="width: auto" filterable>
                    <Option v-for="item in channelName" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
          </li>
          <li class="item">
            <div class="left-tit">渠道账号：</div>
            <div class="right-con">
                <Input v-model="channelAccount"  style="width: 60px"></Input>
            </div>
          </li>
          <li class="item">
            <div class="left-tit">渠道ID：</div>
            <div class="right-con">
                <Select style="width: auto" filterable>
                    <Option v-for="item in channelID" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
          </li>
          <li class="item">
              <Button type="primary" icon="ios-search">搜索</Button>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 渠道状态
      channelStatus: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "1",
          label: "正常"
        },
        {
          value: "2",
          label: "未审核"
        },
        {
          value: "3",
          label: "禁用"
        }
      ],
      channelStateChoese: "all",
      //渠道等级
      channelStep: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "1",
          label: "渠道一"
        },
        {
          value: "2",
          label: "渠道二"
        },
        {
          value: "3",
          label: "渠道三"
        }
      ],
      channelStepChoese: "all",
      // 系统
      system: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "1",
          label: "安卓"
        },
        {
          value: "2",
          label: "IOS"
        },
        {
          value: "3",
          label: "H5"
        }
      ],
      systemChoese: "all",
      //平台专员
      pepole: [
        {
          value: "1",
          label: "张三"
        },
        {
          value: "2",
          label: "李四"
        },
        {
          value: "3",
          label: "bigman"
        }
      ],
      // 渠道名称
      channelName: [
        {
          value: "1",
          label: "今日头条"
        },
        {
          value: "2",
          label: "百度01"
        },
        {
          value: "3",
          label: "百度"
        }
      ],
      // 渠道账号
      channelAccount: '',
      // 渠道iD
      channelID: [
        {
          value: "1",
          label: "5556"
        },
        {
          value: "2",
          label: "69"
        },
        {
          value: "3",
          label: "98"
        }
      ]
    };
  },
  methods:{
    addChannel(){
      this.$router.push({name:'channeladd'})
    }
  }
};
</script>
<style scoped>
.top-box {
  display: block;
  background: #ffffff;
  padding: 10px 25px 0 25px;
  -webkit-box-shadow: 0px 1px 5px #ccc;
  box-shadow: 0px 1px 5px #ccc;
  overflow: hidden;
  margin-bottom: 25px;
}
.top-box ul .item {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
}
.top-box ul .item .left-tit {
  font-size: 14px;
  line-height: 32px;
  float: left;
  margin-right: 5px;
}
.top-box ul .item .right-con {
  font-size: 14px;
  line-height: 24px;
  float: left;
}
.btn button {
  margin-right: 10px;
}
</style>

