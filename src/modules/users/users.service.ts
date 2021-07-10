import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private userContacts = {
    github: 'https://github.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
  };

  private users = [
    {
      id: 0,
      followed: false,
      name: 'bro',
      status: 'zzzzzzz',
      photos: {
        small:
          'https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/golang.png?fit=730%2C412&ssl=1',
      },
      contacts: this.userContacts,
    },
    {
      id: 1,
      followed: false,
      name: 'igor',
      status: 'uuuu',
      photos: {
        small:
          'https://computingforgeeks.com/wp-content/uploads/2018/09/install-latest-golang-centos7-ubuntu-18.04-01.png',
      },
      contacts: this.userContacts,
    },
    {
      id: 2,
      followed: false,
      name: 'igor',
      status: 'ssssss',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 3,
      followed: false,
      name: 'igor',
      status: 'vvvvvvv',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 4,
      followed: false,
      name: 'foxie',
      status: 'jjjjjjj',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 5,
      followed: false,
      name: 'bobbie',
      status: 'mmmmmmm',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 6,
      followed: false,
      name: 'igor',
      status: 'single',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 7,
      followed: false,
      name: 'igor',
      status: 'single',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 8,
      followed: false,
      name: 'igor',
      status: 'single',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 9,
      followed: false,
      name: 'igor',
      status: 'single',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 10,
      followed: false,
      name: 'igor',
      status: 'xxxxxxxx',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
    {
      id: 11,
      followed: false,
      name: 'jasmin',
      status: 'mmmmmmmm',
      photos: {
        small:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
      },
      contacts: this.userContacts,
    },
  ];

  getUsers(pageSequentialNumber: number, userCountOnOnePage: number) {
    const totalNumOfUsers = this.users.length;

    const indexOfLastUser = pageSequentialNumber * userCountOnOnePage;
    const indexOfFirstUser = indexOfLastUser - userCountOnOnePage;

    let slicedUsers;
    if (indexOfLastUser > totalNumOfUsers) {
      slicedUsers = this.users.slice(indexOfFirstUser);
    } else {
      slicedUsers = this.users.slice(indexOfFirstUser, indexOfLastUser);
    }

    return { totalCount: totalNumOfUsers, users: slicedUsers };
  }

  followUser(userId: number) {
    this.users[userId].followed = true;
  }

  unfollowUser(userId: number) {
    this.users[userId].followed = false;
  }

  getProfile(userId: number) {
    return this.users[userId];
  }

  getUserStatus(userId: number) {
    return this.users[userId].status;
  }

  updateUserStatus(userId: number, newStatus: string) {
    this.users[userId].status = newStatus;
    return newStatus;
  }
}
