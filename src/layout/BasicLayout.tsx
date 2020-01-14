import React, { Fragment } from 'react'
import { Route as ReactRoute, Switch } from 'react-router-dom'

const BasicLayout: React.FC<{ modules: Module[] }> = props => {
  const publicRoutes: Route[] = []
  for (let m of props.modules) {
    publicRoutes.push(...m.routes)
  }

  return (
    <Switch>
      <Fragment>
        {publicRoutes.map(route => {
          let PageComponent = route.component
          return (
            <ReactRoute
              exact
              key={route.path}
              path={route.path}
              render={routeprops => <PageComponent {...routeprops} />}
            />
          )
        })}
      </Fragment>
    </Switch>
  )
}

export default BasicLayout
