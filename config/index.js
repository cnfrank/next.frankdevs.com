/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2022-09-26 22:24:16
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2022-09-27 11:24:02
 * @Description: file content
 * @FilePath: /next-crash-course/config/index.js
 */
const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://next.frankdevs.com'
