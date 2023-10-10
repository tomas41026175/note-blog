# 在NEXT中添加CSS的方式

- 扣除第三方CSS套件 / 框架之外，可以使用Global / module CSS兩種方式為NEXT添加CSS

- module CSS
```
import React from 'react'
import styles from './page.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>Contact</div>
    )
}

export default Contact

page.module.css
```
.contact{
    background-color: brown;
  } 
```