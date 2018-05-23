import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN';//引入中文文件
import VueI18n from 'vue-i18n';

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
});
const config = {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  },
  fieldsBagName: 'veefields',//此处默认为fields
  events: 'blur|input',
  delay: 100,//间隔100ms验证
  errorBagName: 'errors',
  strict: true,//代表没有设置规则的表单不进行校验
}

Vue.use(VeeValidate,config);
