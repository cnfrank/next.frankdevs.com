/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2022-09-26 22:24:16
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2022-09-27 14:02:28
 * @Description: file content
 * @FilePath: /next-crash-course/components/Meta.js
 */
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'FrankDevs',
  keywords: 'web development, programming',
  description: 'Get the latest works in FrankDevs',
}

export default Meta
