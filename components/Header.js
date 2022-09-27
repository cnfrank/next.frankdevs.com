/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2022-09-26 22:24:16
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2022-09-27 14:00:55
 * @Description: file content
 * @FilePath: /next-crash-course/components/Header.js
 */
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>FrankDevs</span> Works
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest FrankDevs works
      </p>
    </div>
  )
}

export default Header
