const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/ElMessiri-Bold.ttf","fonts/ElMessiri-Medium.ttf","fonts/ElMessiri-Regular.ttf","fonts/ElMessiri-SemiBold.ttf","fonts/Poppins-Black.ttf","fonts/Poppins-BlackItalic.ttf","fonts/Poppins-Bold.ttf","fonts/Poppins-BoldItalic.ttf","fonts/Poppins-ExtraBold.ttf","fonts/Poppins-ExtraBoldItalic.ttf","fonts/Poppins-ExtraLight.ttf","fonts/Poppins-ExtraLightItalic.ttf","fonts/Poppins-Italic.ttf","fonts/Poppins-Light.ttf","fonts/Poppins-LightItalic.ttf","fonts/Poppins-Medium.ttf","fonts/Poppins-MediumItalic.ttf","fonts/Poppins-Regular.ttf","fonts/Poppins-SemiBold.ttf","fonts/Poppins-SemiBoldItalic.ttf","fonts/Poppins-Thin.ttf","fonts/Poppins-ThinItalic.ttf","images/.DS_Store","images/bg-home.png","images/bubble.png","images/contact-1.png","images/contact-2.png","images/contact-3.png","images/expertise-blue.png","images/expertise-kaki.png","images/expertise-purple.png","images/expertise-red.png","images/expertise-yellow.png","images/fleche-actu-home.svg","images/home-equipe.png","images/logo-menu.svg","images/projet.png","main.scss","robot.txt","styles/base.scss","styles/reset.scss"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".scss":"text/x-scss",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.c49abd7e.js","app":"_app/immutable/entry/app.4b2241d8.js","imports":["_app/immutable/entry/start.c49abd7e.js","_app/immutable/chunks/index.06496065.js","_app/immutable/chunks/singletons.772c4219.js","_app/immutable/chunks/index.ceaea0bd.js","_app/immutable/entry/app.4b2241d8.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.06496065.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-08675bda.js'),
			() => import('./chunks/1-97c972df.js'),
			() => import('./chunks/2-e32036c3.js'),
			() => import('./chunks/4-82e31c0e.js'),
			() => import('./chunks/5-24e5d48d.js'),
			() => import('./chunks/6-af9f3c8c.js'),
			() => import('./chunks/7-9ed33216.js')
		],
		routes: [
			{
				id: "/(admin)/admin/home",
				pattern: /^\/admin\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/login",
				pattern: /^\/admin\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/logout",
				pattern: /^\/admin\/logout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/register",
				pattern: /^\/admin\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/","/__data.json","/actualites","/actualites/__data.json","/agence","/agence/__data.json","/contact","/contact/__data.json","/expertises","/expertises/__data.json","/projets","/projets/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
