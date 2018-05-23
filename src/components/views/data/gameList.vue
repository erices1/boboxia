<template>
  <div>
        <div class="gameListBox" :style="{minHeight:minHeight}">
            <div class="all_game_title">所有游戏</div>
            <div class="layout-content">
                <div class="list">
                    <Table border :columns="gameListTit" :data="gameListData"></Table>
                </div>
            </div>
        </div>
    <foot/>
  </div>
</template>
<script>
export default {
  beforeCreate() {},
  data() {
    return {
      gameList: [],
      minHeight: "",
      gameListTit: [
        {
          title: "游戏",
          key: "game_name",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "ios-game-controller-b"
                },
                style: {
                  marginRight: "10px",
                  fontSize: "16px",
                  verticalAlign: "middle"
                }
              }),
              h("strong", params.row.game_name)
            ]);
          }
        },
        {
          title: "(总)新增账户",
          align: "center",
          key: "total_account"
        },
        {
          title: "(总)新增创角",
          align: "center",
          key: "total_role"
        },
        {
          title: "(总)付费用户数",
          align: "center",
          key: "total_account_pay_count"
        },
        {
          title: "(总)付费角色数",
          align: "center",
          key: "total_role_pay_count"
        },
        {
          title: "(总)付费率(账户/角色)",
          align: "center",
          key: "pay_rate"
        },
        {
          title: "(总)收入",
          align: "center",
          key: "total_account_pay"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.row.game_name);
                    }
                  }
                },
                "查看"
              )
            ]);
          }
        }
      ],
      gameListData: [
        {
          id: "7",
          game_name: "仙境传说H5",
          total_account: 257723,
          total_role: 236296,
          total_account_pay: 175920,
          total_account_pay_count: 2158,
          total_role_pay_count: 2281,
          pay_rate: "0.84%(0.97%)"
        },
        {
          id: "5",
          game_name: "卓越之翼",
          total_account: 234479,
          total_role: 215815,
          total_account_pay: 171428,
          total_account_pay_count: 2004,
          total_role_pay_count: 2121,
          pay_rate: "0.85%(0.98%)"
        },
        {
          id: "6",
          game_name: "卓越之翼-测试",
          total_account: 234479,
          total_role: 215815,
          total_account_pay: 171428,
          total_account_pay_count: 2004,
          total_role_pay_count: 2121,
          pay_rate: "0.85%(0.98%)"
        },
        {
          id: "1,2,3,4",
          game_name: "恶魔猎手H5",
          total_account: 957478,
          total_role: 880647,
          total_account_pay: 689941,
          total_account_pay_count: 8153,
          total_role_pay_count: 8627,
          pay_rate: "0.85%(0.98%)"
        },
        {
          id: "5",
          game_name: "卓越之翼",
          total_account: 234479,
          total_role: 215815,
          total_account_pay: 171428,
          total_account_pay_count: 2004,
          total_role_pay_count: 2121,
          pay_rate: "0.85%(0.98%)"
        },
        {
          id: "6",
          game_name: "卓越之翼-测试",
          total_account: 234479,
          total_role: 215815,
          total_account_pay: 171428,
          total_account_pay_count: 2004,
          total_role_pay_count: 2121,
          pay_rate: "0.85%(0.98%)"
        },
        {
          id: "1,2,3,4",
          game_name: "恶魔猎手H5",
          total_account: 957478,
          total_role: 880647,
          total_account_pay: 689941,
          total_account_pay_count: 8153,
          total_role_pay_count: 8627,
          pay_rate: "0.85%(0.98%)"
        }
      ]
    };
  },
  methods: {
    show(gameName){
          this.$router.push({name:'database',query: {gameName:gameName}});
      }
  },
  created() {
    this.minHeight = document.body.clientHeight - 129 + "px";
  },
  mounted() {
      
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-content {
  min-height: 500px;
}

.gameListBox {
  padding: 20px 50px;
}

.all_game_title {
  width: 160px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 20px;
  border: 1px solid #a3aab6;
  border-radius: 5px;
  font-size: 16px;
  background: #f4f4f7;
}
</style>