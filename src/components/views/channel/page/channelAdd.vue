<template>
  <div class="box-common">
      <div class="title">
          <h3>渠道管理</h3>
      </div>
      <div class="content">
            <Form ref="channelData" :model="channelData" :rules="ruleValidate" :label-width="120">
                <FormItem label="渠道名称" prop="cl_name">
                    <Input v-model="channelData.cl_name" placeholder="请输入您的渠道名称"></Input>
                </FormItem>
                <FormItem label="渠道账号" prop="account">
                    <Input v-model="channelData.account" placeholder="请输入您的渠道账号"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input v-model="channelData.password" type="password" placeholder="请输入您的密码"></Input>
                </FormItem>
                <FormItem label="系统" prop="system">
                    <Input v-model="channelData.system" placeholder="请输入您的所属平台"></Input>
                </FormItem>
                <FormItem label="平台专员" prop="commissioner">
                  <Select  v-model="channelData.commissioner" placeholder="请选择平台专员">
                      <Option value="1">缪新云</Option>
                      <Option value="2">同宇</Option>
                      <Option value="3">Sydney</Option>
                  </Select>
              </FormItem>
              <FormItem label="联系人" prop="contacts">
                  <Input v-model="channelData.contacts" placeholder="请输入联系人"></Input>
              </FormItem>
              <FormItem label="手机" prop="tel">
                  <Input v-model="channelData.tel" placeholder="请输入联系人"></Input>
              </FormItem>
              <FormItem label="QQ" prop="qq">
                  <Input v-model="channelData.qq" placeholder="请输入QQ"></Input>
              </FormItem>
              <FormItem label="微信" prop="wechat">
                  <Input v-model="channelData.wechat" placeholder="请输入微信"></Input>
              </FormItem>
              <FormItem label="公司名称" prop="company">
                  <Input v-model="channelData.company" placeholder="请输入公司名称"></Input>
              </FormItem>
               <FormItem label="子账号权限" prop="childAccout">
                  <RadioGroup v-model="channelData.childAccout">
                      <Radio label="0">关闭</Radio>
                      <Radio label="1">开启</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem label="账号状态" prop="accountStatus">
                  <RadioGroup v-model="channelData.accountStatus">
                      <Radio label="0">锁定</Radio>
                      <Radio label="1">正常</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('channelData')">确认</Button>
                  <Button type="ghost" @click="backTo" style="margin-left: 8px">返回</Button>
              </FormItem>
            </Form>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    let cl_name = function(rule, value, callback) {
      if (value === '') {
        return callback(new Error("渠道名称不能为空！"));
      } else {
        callback();
      }
    };
    let password = function(rule, value, callback) {
      if (value === '') {
        return callback(new Error("密码不能为空！"));
      } else if(value.length<6){
        return callback(new Error("密码不能小于6位！"));
      } else {
        callback();
      }
    };
    let reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    let telephone = function(rule, value, callback) {
      if (value === '') {
        return callback(new Error("手机号不能为空！"));
      } else if(!reg.test(value) || value.length !== 11){
        return callback(new Error("输入手机号格式不正确！"));
      } else {
        callback();
      }
    };
    return {
      channelData: {
        cl_name: '',
        account: '',
        password: '',
        system: '',
        commissioner: '',
        contacts:'',
        tel:'',
        qq:'',
        wechat:'',
        company:'',
        childAccout:'',
        accountStatus:''
      },
      ruleValidate: {
        cl_name: [
          {
            required: true,
            validator:cl_name,
            trigger: "blur"
          }
        ],
        account: [
          {
            required: true,
            message: '请输入渠道账号！',
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            validator:password,
            trigger: "blur"
          }
        ],
        system: [
          {
            required: true,
             message: '请输入所属品台！',
            trigger: "blur"
          }
        ],
        commissioner: [
          {
            required: true,
            message: '请选择平台专员！',
            trigger: 'change'
          }
        ],
        contacts: [
          {
            required: true,
            message: '请输入联系人！',
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            validator:telephone,
            trigger: "blur"
          }
        ],
        qq: [
          {
            required: true,
            message: '请输入QQ号！',
            trigger: "blur"
          }
        ],
        wechat: [
          {
            required: true,
            message: '请输入微信号！',
            trigger: "blur"
          }
        ],
        company: [
          {
            required: true,
            message: '请输入公司名称！',
            trigger: "blur"
          }
        ],
        childAccout: [
          {
            required: true,
            message: '请选择子账号权限！',
            trigger: "change"
          }
        ],
        accountStatus: [
          {
            required: true,
            message: '请选择子账号状态！',
            trigger: "change"
          }
        ],
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("验证不能通过!");
        }
      });
    },
    backTo() {
      this.$router.push({name:'channellist'})
    }
  }
};
</script>
<style scoped>

</style>
