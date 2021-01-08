import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext } from 'react'
import { Item, Label } from 'semantic-ui-react'
import ActivityStore from '../../../app/stores/activityStore';
import ActivityListItem from './ActivityListItem';

const ActivityList: React.FC = () => {
    const activityStore = useContext(ActivityStore);
    const { activitiesByDate } = activityStore;
    return (
        <>
            {
                activitiesByDate.map(([group, activities]) => {
                    return (
                        <Fragment key={group}>
                            <Label size='large' color='blue'>
                                {group}
                            </Label>

                            <Item.Group divided>
                                {
                                    activities.map(activity => {
                                        return (
                                            <ActivityListItem key={activity.id} activity={activity} />
                                        );
                                    })
                                }
                            </Item.Group>


                        </Fragment>
                    );
                })
            }
        </>
    )
}

export default observer(ActivityList);