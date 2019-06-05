import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../scss/layout.scss"

const Layout = ({children}) => {
    return (
        <main>
        <Navbar />
            <h1 className={styles.subheader}>This is the layout</h1>
        </main>
    )
}

export default Layout
