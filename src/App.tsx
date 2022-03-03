import React, { Component, RefObject } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import articles from './articles'
import Main from './components/general/Main'
import Header from './components/general/Header'
import Footer from './components/general/Footer'

console.log(articles)

/**The main component. It keeps track of the currently selected article dynamically updates the main section.
 * @component
 */
class App extends Component<{}, { currentArticle: string }> {
	state = {
		currentArticle: '',
	}

	componentDidMount() {
		this.changeArticle(window.location.pathname.replace('/', ''))
	}

	changeArticle = (url: string) => {
		const article = this.ARTICLES.find((article) => article.url === url)
		const defaultTitle = `Диана Кассиль-Иванова`

		if (url && article) {
			window.history.pushState(
				article.header,
				article.header,
				`/${article.url}`
			)

			document.title = `${article.header} | ${defaultTitle}`
		} else {
			window.history.pushState(defaultTitle, defaultTitle, `/`)
			document.title = defaultTitle
		}

		if (this.state.currentArticle != url)
			this.setState({
				currentArticle: url,
			})
	}

	ARTICLES = articles

	render() {
		return (
			<div className='mainDiv '>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route
							path='*'
							element={
								<Main
									currentArticle={this.state.currentArticle}
									changeArticle={this.changeArticle}
									articles={this.ARTICLES}
								/>
							}
						/>
					</Routes>
				</BrowserRouter>
				<Footer />
			</div>
		)
	}
}

export default App
