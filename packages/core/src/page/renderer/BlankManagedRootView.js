import { Component, createElement } from 'react';
import ErrorBoundary from './ErrorBoundary';

/**
 * Blank managed root view does not nothing except for rendering the current
 * page view.
 *
 * This is the default managed root view.
 */
export default class BlankManagedRootView extends Component {
  static get defaultProps() {
    return {
      $pageView: null,
    };
  }

  /**
   * @inheritdoc
   */
  render() {
    const { $pageView } = this.props;

    if (!$pageView) {
      return null;
    }

    const restProps = Object.assign({}, this.props);
    delete restProps.$pageView;

    // Wrap view with ErrorBoundary in $Debug env
    return $Debug
      ? createElement(ErrorBoundary, [], createElement($pageView, restProps))
      : createElement($pageView, restProps);
  }
}
