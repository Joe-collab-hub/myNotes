import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import List from '../../05_src_网络请求案例/component/List';
import Search from '../../05_src_网络请求案例/component/Search';
import Message from '../../src/psges/Home/Message';
import App from '../../15_src_传递search参数/App';
import Home from '../../15_src_传递search参数/psges/Home';
import Detail from '../../src/psges/Home/Message/Detail';

const ComponentPreviews = () => {
    return (
            <Previews palette={<PaletteTree/>}>
                <ComponentPreview path="/PaletteTree">
                    <PaletteTree/>
                </ComponentPreview>
                <ComponentPreview path="/List">
                    <List/>
                </ComponentPreview>
                <ComponentPreview path="/Search">
                    <Search/>
                </ComponentPreview>
                <ComponentPreview path="/Message">
                    <Message/>
                </ComponentPreview>
                <ComponentPreview path="/App">
                    <App/>
                </ComponentPreview>
                <ComponentPreview path="/Home">
                    <Home/>
                </ComponentPreview>
                <ComponentPreview path="/Detail">
                    <Detail/>
                </ComponentPreview>
            </Previews>
    );
};

export default ComponentPreviews;
