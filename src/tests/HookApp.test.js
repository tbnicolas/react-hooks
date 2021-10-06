import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';


describe('Prueba del comoponente <HookApp />', () => {
  

    test('debe de ejecutarse correctamente en el tiempo dicho componente', () => {
        
        const wrapper = shallow( <HookApp /> );

        expect( wrapper ).toMatchSnapshot();

    });
    

});
 