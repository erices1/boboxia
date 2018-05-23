<template>
  <div id="menu">
    <canvas ref="canvas" class="canvas"></canvas>
    <transition name="fade-out">
			<div v-show="!login">
	    	<div class="logo-bg"></div>
        <div class="form">
          <form  @submit.prevent="do_login">
            <div class="item">
              <Icon type="person" class="icon">
              </Icon><input type="text"  class="input" v-model.trim="username" v-validate="'required|username'" name="username" placeholder="请输入用户名" :class="{'input': true, 'is-danger': errors.has('username')}">
              <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
            </div>
            <div class="item">
              <Icon type="locked" class="icon"></Icon>
              <input type="password" v-model.trim="password" class="input" v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('password')}" name="password" placeholder="请输入密码">
              <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
            </div>
            <input type="submit" class="gv" value="登录">
          </form>
        </div>
			</div>
  		</transition>
    <div class="city"></div>
		<div class="moon"></div>
  </div>
</template>

<script>
import VeeValidate, { Validator } from "vee-validate";
import Cookies from "js-cookie";
export default {
  name: "Login",
  locale: "ZH",
  data() {
    return {
      login: false,
      username: "",
      password: "",
      error_message: "",
      usernameError: false,
      passwordError: false
    };
  },
  created() {
    Validator.extend("username", {
      getMessage: field => "用户名长度是3-6位",
      validate: value => value.length > 2 && value.length < 7
    });
    Validator.extend("alpha_num", {
      getMessage: field => "密码长度至少6位",
      validate: value => value.length > 5
    });
  },
  mounted() {
    var WINDOW_WIDTH = document.body.offsetWidth;
    var WINDOW_HEIGHT = document.body.offsetHeight;
    var canvas, context;
    var num = 500;
    var stars = [];
    var mouseX = WINDOW_WIDTH / 2;
    var mouseY = WINDOW_HEIGHT / 2;
    var rnd;

    canvas = this.$refs.canvas;
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    context = canvas.getContext("2d");

    addStar();
    setInterval(render, 33);
    liuxing();

    // render();
    document.body.addEventListener("mousemove", mouseMove);

    function liuxing() {
      var time = Math.round(Math.random() * 3000 + 33);
      setTimeout(function() {
        rnd = Math.ceil(Math.random() * stars.length);
        liuxing();
      }, time);
    }

    function mouseMove(e) {
      //因为是整屏背景，这里不做坐标转换
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function render() {
      context.fillStyle = "rgba(0,0,0,0.1)";
      context.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      // context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
      for (var i = 0; i < num; i++) {
        var star = stars[i];
        if (i == rnd) {
          star.vx = -5;
          star.vy = 20;
          context.beginPath();
          context.strokeStyle = "rgba(255,255,255," + star.alpha + ")";
          context.lineWidth = star.r;
          context.moveTo(star.x, star.y);
          context.lineTo(star.x + star.vx, star.y + star.vy);
          context.stroke();
          context.closePath();
        }
        star.alpha += star.ra;
        if (star.alpha <= 0) {
          star.alpha = 0;
          star.ra = -star.ra;
          star.vx = Math.random() * 0.2 - 0.1;
          star.vy = Math.random() * 0.2 - 0.1;
        } else if (star.alpha > 1) {
          star.alpha = 1;
          star.ra = -star.ra;
        }
        star.x += star.vx;
        if (star.x >= WINDOW_WIDTH) {
          star.x = 0;
        } else if (star.x < 0) {
          star.x = WINDOW_WIDTH;
          star.vx = Math.random() * 0.2 - 0.1;
          star.vy = Math.random() * 0.2 - 0.1;
        }
        star.y += star.vy;
        if (star.y >= WINDOW_HEIGHT) {
          star.y = 0;
          star.vy = Math.random() * 0.2 - 0.1;
          star.vx = Math.random() * 0.2 - 0.1;
        } else if (star.y < 0) {
          star.y = WINDOW_HEIGHT;
        }
        context.beginPath();
        var bg = context.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.r
        );
        bg.addColorStop(0, "rgba(255,255,255," + star.alpha + ")");
        bg.addColorStop(1, "rgba(255,255,255,0)");
        context.fillStyle = bg;
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
      }
    }

    function addStar() {
      for (var i = 0; i < num; i++) {
        var aStar = {
          x: Math.round(Math.random() * WINDOW_WIDTH),
          y: Math.round(Math.random() * WINDOW_HEIGHT),
          r: Math.random() * 3,
          ra: Math.random() * 0.05,
          alpha: Math.random(),
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1
        };
        stars.push(aStar);
      }
    }
  },
  methods: {
    do_login() {
      Cookies.set("user", this.username);
      Cookies.set("password", this.password);
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$router.push({ name: "main" });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.logo-bg {
  width: 750px;
  height: 200px;
  position: absolute;
  z-index: 10000;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: url("../../assets/images/top_logo.png") no-repeat;
}
.canvas {
  position: fixed;
  z-index: -1;
}
.city {
  width: 100%;
  height: 170px;
  position: fixed;
  bottom: 0px;
  z-index: 100;
  background: url("../../assets/images/city.png") no-repeat;
  background-size: cover;
}
.moon {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 100px;
  top: 100px;
  background: url("../../assets/images/moon.png") no-repeat;
  background-size: cover;
}
.form {
  position: relative;
  width: 350px;
  margin: 300px auto 0 auto;
  text-align: center;
}
.form .input {
  width: 350px;
  height: 42px;
  padding: 0 15px 0 35px;
  background: #2d2d2d; /* browsers that don't support rgba */
  background: rgba(45, 45, 45, 0.15);
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #066197; /* browsers that don't support rgba */
  border: 1px solid rgba(25, 156, 195, 0.85);
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}
.form .input::-webkit-input-placeholder {
  color: #aab2bd;
}
.form input:-moz-placeholder {
  color: #fff;
}
.form input:-ms-input-placeholder {
  color: #fff;
}
.form input::-webkit-input-placeholder {
  color: #fff;
}
.form input:focus {
  outline: none;
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}
.form .item {
  position: relative;
  margin-top: 25px;
}
.form .item .icon {
  position: absolute;
  top: 8px;
  left: 3px;
  padding: 4px 7px;
  color: #199cc4;
  font-size: 16px;
}
.gv {
  text-decoration: none;
  background: url("../../assets/images/nav_gv.png") repeat 0px 0px;
  width: 350px;
  height: 43px;
  text-align: center;
  line-height: 43px;
  cursor: pointer;
  font: 18px/43px "microsoft yahei";
  color: #199cc4;
  margin: 25px auto 0 auto;
  outline: none;
  border: none;
}
.gv:hover {
  background: url("../../assets/images/nav_gv.png") repeat 0px -43px;
  color: #1d7eb8;
  box-shadow: 0 0 6px #1d7eb8;
  -webkit-box-shadow: 0 0 6px #1d7eb8;
  transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
}
.fade-out-enter-active,
.fade-out-leave-active {
  transition: all 0.5s;
}
.fade-out-enter,
.fade-out-leave-active {
  opacity: 0;
  transform: translateX(-400px);
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.5s;
}
.fade-in-enter,
.fade-in-leave-active {
  opacity: 0;
  transform: translateX(400px);
}
.error-message {
  position: absolute;
  top: 45px;
  left: 5px;
  color: red;
  font-size: 12px;
}
</style>
