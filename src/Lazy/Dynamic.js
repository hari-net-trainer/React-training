import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
    loader: () => import('./Profile/Profile'),
    loading: () => <div>Loading Profile copm... Please wait</div>
});

export const Dynamic =() => (
    <LoadableComponent/>
);