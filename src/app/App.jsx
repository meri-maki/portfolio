import React, { useState, Suspense } from 'react'
import { Header } from '~/widgets/Header'
import { Footer } from '~/widgets/Footer'
import { Loader } from '~/shared/UI/Loader'
import './styles/resetNew.css'
import './styles/App.css'



const AllSections = React.lazy(() => import('../pages/AllSections'))

export const getCurrentTheme = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches

function App() {
	const [mode, setMode] = useState(getCurrentTheme())

	return (
		<div className={mode ? 'modeDark' : 'modeLight'}>
			<div className="wrapper">
				<Header mode={mode} setMode={setMode} />
				<Suspense fallback={<Loader />}>
					<AllSections mode={mode} />
				</Suspense>
				<Footer mode={mode} />
			</div>
		</div>
	)
}

export default App
