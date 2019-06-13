import request from '../utils/request';
//登录接口
export function login(params) {
  return request({
    url:"/user/login",
    method:"POST",
    data:params
  });
}
export function UserInfo() {
  return request({
    url:"/user/userInfo",
  });
}
//获取考试类型

// export function examType() {
//   return request({
//     url:'/exam/examType',
//     method:'GET'
//   })
// }
// //获取试题类型
// export function questionsType() {
//   return request({
//     url:'/exam/getQuestionsType',
//     method:'GET'
//   })
// }
// //获取所有的课程
// export function subject() {
//   return request({
//     url:'/exam/subject',
//     method:'GET'
//   })
// }
// //添加试题
// export function addQuestion(params) {
//   return request({
//     url: '/exam/questions',
//     method: 'POST',
//     data: params
//   })
// }

// // //试题分类
// // export function typeQuestion() {
// //   return request({
// //     url: '/exam/getQuestionsType',
// //     method: 'GET'
// //   })
// // }

// //查看试题
// export function viewQuestion() {
//   return request({
//     url: '/exam/question/new',
//     method: 'GET'
//   })
// }

// //获取所有的试题
// export function allQuestion() {
//   return request({
//     url: '/exam/questions/new',
//     method: 'GET'
//   })
// }