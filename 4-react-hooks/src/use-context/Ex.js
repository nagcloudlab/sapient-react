import React, { useContext } from 'react';

// to keep current login user data
const UserContext = React.createContext()
// to keep current theme
const ThemeContext = React.createContext()


function UserProfile() {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    return (
        <div className='alert alert-info'>
            Hello , <span className={theme.bg}>{user.name}</span>
            {
                /* <UserContext.Consumer>
                    {user => {
                        return (
                            <span className='bg-dark'>{user.name}</span>
                        )
                    }}
                </UserContext.Consumer> */
            }
        </div>
    )
}

function Card() {
    return (
        <div className='card card-body'>
            <UserProfile />
        </div>
    )
}


function Ex({ title }) {

    const user = {
        name: 'Nag',
        location: 'chennai'
    }
    const theme = {
        bg: 'bg-danger'
    }

    return (
        <div className='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>
                <UserContext.Provider value={user}>
                    <ThemeContext.Provider value={theme}>
                        <Card />
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </div>
        </div>
    );
}

export default Ex;