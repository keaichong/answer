import * as type from "./mutations_type";

export default {
  // Vue 建议我们mutation 类型用大写常量表示
  // 数据初始化
  [type.INIT_DATA](state) {
    console.log("mutation数据初始化");
    state.itemNum = 0;
    state.allTime = 20;
    state.answerId = [];
    state.isDone = false;
    localStorage.clear();
  },
  //下一步 itemNum变化+1
  [type.ADD_ITEM](state, num) {
    state.itemNum === state.problems.length - 1
      ? (state.itemNum = state.problems.length - 1)
      : (state.itemNum += num);
  },
  // 存储回答后的题目，然后对比答案是否准确
  [type.REMEBER_ITEM](state, param) {
    let problems = state.problems;
  },
  //定时器
  [type.INTEVAL_TIME](state) {
    //每次进入先清除上一次的定时器 防止定时器累加
    clearInterval(state.timer);
    state.timer = setInterval(() => {
      if (state.allTime === 0) {
        clearInterval(state.timer);
        state.isDone = true;
      } else {
        state.allTime--;
      }
    }, 1000);
  },
  // 清除定时器
  [type.CLEAR_TIME](state) {
    state.timer = null;
  },
  // 统计总分 state payload
  [type.GET_RESULT](state, param) {
    state.userInfo.score = param;
    localStorage.score = param;
  },
  // 记录做题是否完成
  [type.IS_DONE](state, bool) {
    state.isDone = bool;
  }
};
