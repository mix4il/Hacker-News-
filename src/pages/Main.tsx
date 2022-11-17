import React from 'react'
import ButtonReloadNews from '../components/ButtonReloadNews'
import Header from '../components/Header'
import NewsList from '../components/NewsList'

const Main = () => {
    return (
        <div>
            <Header><ButtonReloadNews /></Header>
            <main>
                <div className="main__container">
                    <NewsList />
                </div>
            </main>
        </div>
    )
}

export default Main