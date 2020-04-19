import * as React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';

import { GlobalMap, Header } from 'components';
import { AppState, CountryStatistic, getStatistic, selectLoadingStatistic, selectStatistic } from 'modules';

interface ReduxProps {
    statistic: CountryStatistic[];
    isLoading: boolean;
}

interface DispatchProps {
    getStatistic: typeof getStatistic;
}

export type Props = DispatchProps & ReduxProps;

export class AppLayout extends React.Component<Props> {
    public componentDidMount() {
        this.props.getStatistic();
    }

    public render() {
        const { statistic, isLoading } = this.props;

        if (isLoading) {
            return null;
        }

        return (
            <React.Fragment>
                <Header />
                <GlobalMap statistic={statistic} />
            </React.Fragment>
        );
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> = (state: AppState): ReduxProps => ({
    statistic: selectStatistic(state),
    isLoading: selectLoadingStatistic(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    getStatistic: () => dispatch(getStatistic()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppLayout);
