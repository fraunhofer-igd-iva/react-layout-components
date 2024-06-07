# React Layout Components

This library provides a collection of React components for layouting that can be reused across web projects.

## Features
- Sidebar layout (hideable sidebar to the left of a page)
- Swipeable drawer (at the bottom of a page)
- Slide carousel (slides can be any React components)

## Usage

### Git Dependency

This library can be added as a git dependency to your `package.json`:

```javascript
"dependencies": {
	"react-layout-components": "fraunhofer-igd-iva/react-layout-components"
}
```

### Local Dependency

The setup requires [Node.js v16 or higher](https://nodejs.org/en/download/).

```bash
git clone https://github.com/fraunhofer-igd-iva/react-layout-components.git
cd react-layout-components
npm install
npm run build
```

This generates the production build in `./lib/`.
From there, the library can be embedded in an HTML document by adding it as an external script file using a relative path: `<script src="../react-layout-components/lib/index.js"></script>`.
It can also be added as a local dependency to your `package.json`:

```javascript
"dependencies": {
	"react-layout-components": "file:../react-layout-components/lib"
}
```

## Minimal Usage Examples

### SidebarLayout

```javascript
<SidebarLayout>
	<Sidebar>
		<SidebarItem title={"First section"}>
			<div>Here goes your control.</div>
		</SidebarItem>
		<SidebarItem title={"Another section"}>
			<div>You can add sections as you need.</div>
		</SidebarItem>
	</Sidebar>
	<Content>
		<h1>Hello world!</h1>
	</Content>
</SidebarLayout>
```

### SwipeableDrawer

```javascript
<SwipeableDrawer icon={['fas', 'table']}
		 description={"Example"}>
	<div>Hello World!</div>
</SwipeableDrawer>
```

### SlideCarousel

```javascript
function Carousel(){
	// Generate some demo slides
	const slides = [
		{
			view: <CustomReactComponent/>,
			icon: ['fas', 'table']
		},
		{
			view: <AnotherCustomReactComponent/>,
			icon: ['fas', 'lightbulb']
		}
	];

	// Set up the carousel
	return(
		<SlideCarousel
			slides={slides}
			activeIndex={0}
			theme="dark"
		/>
	);
}
```

## Dependencies

This library depends on
- [React](https://react.dev/) together with [React DOM](https://react.dev/reference/react#react-dom) as a React renderer for the web
- [Reactstrap](https://reactstrap.github.io/) and [Bootstrap](https://getbootstrap.com/) for the UI
- [FortAwesome](https://github.com/FortAwesome) for Font Awesome icons

## License

This project is released under the Apache-2.0 license. See the [LICENSE](LICENSE) file for detailed information.

## Contributions

We welcome and appreciate all contributions to this project.
Before getting started, try searching the issue tracker for known issues or fixes. For significant changes, in particular those that are based on your personal opinion, please open an issue first describing the changes you would like to make.

## Authors

[Lena Cibulski](https://www.igd.fraunhofer.de/en/institute/employees/lena-cibulski.html), Fraunhofer IGD
