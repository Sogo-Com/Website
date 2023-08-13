const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/ElMessiri-Bold.ttf","fonts/ElMessiri-Medium.ttf","fonts/ElMessiri-Regular.ttf","fonts/ElMessiri-SemiBold.ttf","fonts/Poppins-Black.ttf","fonts/Poppins-BlackItalic.ttf","fonts/Poppins-Bold.ttf","fonts/Poppins-BoldItalic.ttf","fonts/Poppins-ExtraBold.ttf","fonts/Poppins-ExtraBoldItalic.ttf","fonts/Poppins-ExtraLight.ttf","fonts/Poppins-ExtraLightItalic.ttf","fonts/Poppins-Italic.ttf","fonts/Poppins-Light.ttf","fonts/Poppins-LightItalic.ttf","fonts/Poppins-Medium.ttf","fonts/Poppins-MediumItalic.ttf","fonts/Poppins-Regular.ttf","fonts/Poppins-SemiBold.ttf","fonts/Poppins-SemiBoldItalic.ttf","fonts/Poppins-Thin.ttf","fonts/Poppins-ThinItalic.ttf","images/bg-home.png","images/contact-1.png","images/contact-2.png","images/contact-3.png","images/expertise-slide.png","images/home-equipe.png","images/logo-menu.svg","main.scss","robot.txt","styles/base.scss","styles/reset.scss"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".scss":"text/x-scss",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.c12fd6b4.js","app":"_app/immutable/entry/app.7bb3240c.js","imports":["_app/immutable/entry/start.c12fd6b4.js","_app/immutable/chunks/index.f3f28aff.js","_app/immutable/chunks/singletons.6641b7a3.js","_app/immutable/chunks/index.299f05d0.js","_app/immutable/entry/app.7bb3240c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.f3f28aff.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-35d669fe.js'),
			() => import('./chunks/1-0732b257.js'),
			() => import('./chunks/2-af13a9ce.js'),
			() => import('./chunks/4-a2d5a15d.js'),
			() => import('./chunks/5-eb8bd655.js'),
			() => import('./chunks/6-af9f3c8c.js'),
			() => import('./chunks/7-4cd9d8e9.js')
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

const prerendered = new Set(["/","/__data.json","/agence","/agence/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
