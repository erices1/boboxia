<template>
  <div class="top-box">
    <ul>
      <li class="item">
        <div class="left-tit">系统：</div>
        <div class="right-con">
          <Select v-model="systemChoese" style="width: auto">
            <Option v-for="item in system" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </li>
      <li class="item">
        <div class="left-tit">区服：</div>
        <div class="right-con">
          <Select v-model="channelStateChoese" style="width: auto">
            <Option v-for="item in channelStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </li>
      <li class="item">
        <div class="left-tit">一级渠道：</div>
        <div class="right-con">
          <Select v-model="channelStepChoese" style="width: auto">
            <Option v-for="item in channelStep" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </li>
      <li class="item">
        <div class="left-tit">二级渠道：</div>
        <div class="right-con">
          <Select v-model="channelStepChoese2" style="width: auto">
            <Option v-for="item in channelStepTwo" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
        <Button type="primary" icon="ios-search">搜索</Button>
      </li>
      <li class="item fr">
        <div class="left-tit">时实数据：</div>
        <div class="right-con">
          <span class="time" v-html='nowTime'></span>
        </div>
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
          label: "区服一"
        },
        {
          value: "2",
          label: "区服二"
        },
        {
          value: "3",
          label: "区服三"
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
      //二级渠道
      channelStepTwo: [
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
      channelStepChoese2: "all",
      nowTime: "00:00:00" //当前时间
    };
  },
  mounted() {
    this.realTime();
  },
  methods: {
    addChannel() {
      this.$router.push({ name: "channeladd" });
    },
    realTime() {
      let self = this;
      setInterval(getTime, 1000);
      function getTime() {
        let dateObj = new Date();
        let year = dateObj.getFullYear(); //年
        let month = dateObj.getMonth() + 1; //月  (注意：月份+1)
        let date = dateObj.getDate(); //日
        let day = dateObj.getDay();
        let weeks = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ];
        let week = weeks[day]; //根据day值，获取星期数组中的星期数。
        let hours = dateObj.getHours(); //小时
        let minutes = dateObj.getMinutes(); //分钟
        let seconds = dateObj.getSeconds(); //秒
        if (month < 10) {
          month = "0" + month;
        }
        if (date < 10) {
          date = "0" + date;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        let newDate = hours + ":" + minutes + ":" + seconds;
        self.nowTime = newDate;
      }
    }
  },
  destroyed() {
    window.clearTimeout(this.realTime()); //结束Timeout
  }
};
</script>
<style scoped>
.top-box ul .item.fr{
  float: right;
}
.top-box {
  display: block;
  background: #ffffff;
  padding: 10px 25px 0 25px;
  -webkit-box-shadow: 0px 1px 5px #ccc;
  box-shadow: 0px 1px 5px #ccc;
  overflow: hidden;
  margin-bottom: 25px;
  position: fixed;
  right: 0;
  top: 60px;
  left: 200px;
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
  line-height: 32px;
  float: left;
}
.time {
  font-size: 14px;
  font-weight: bold;
  line-height: 32px;
  color: #c23531;
}
</style>

