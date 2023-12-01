import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context';

const Layout = ({children}) => {
const {theme} = useContext(ContextGlobal);
return (
<div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
{children}
</div>
)
}

export default Layout