// tslint-disable-next-line
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import raf from 'tempPolyfills';

Enzyme.configure({ adapter: new Adapter() });
// tslint:disable-next-line:no-any
declare var global: any;

global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;

// tslint:disable-next-line:no-console
console.error = message => {
    throw new Error(message);
};
