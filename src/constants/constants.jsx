export const token = localStorage.getItem('token');

export const showMovies = () => {
    const counter = { init: 12, more: 3 };

    if (window.innerWidth < 1040) {
        counter.init = 8;
        counter.more = 2;
    }
    if (window.innerWidth < 481) {
        counter.init = 5;
        counter.more = 1;
    }
    return counter;
};
