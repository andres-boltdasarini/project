import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow, toggleFollowingProgress
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        import * as axios from "axios";


        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers:     {
                "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
            }
        });


        export const usersAPI = {
            getUsers(currentPage = 1, pageSize = 10) {
                return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                    .then(response => {
                        return response.data;
                    });
            }
        }

        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
    });
}

render() {
    return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               followingInProgress={this.props.followingInProgress}
        />
    </>
}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);