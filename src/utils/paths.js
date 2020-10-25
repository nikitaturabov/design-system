import PATHS from "@/config/rout";

export const getRoutPaths = () => {
	return PATHS.map(path => {
		return {
			path: path.path,
			name: path.name,
			component: path.name,
		};
	});
};

export const getMenuPaths = () => {
	return PATHS.map(path => {
		return {
			path: path.path,
			name: path.name,
		};
	});
};
