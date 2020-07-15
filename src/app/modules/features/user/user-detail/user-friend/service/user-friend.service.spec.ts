import { TestBed } from '@angular/core/testing';

import { UserFriendService } from './user-friend.service';

describe('UserFriendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFriendService = TestBed.get(UserFriendService);
    expect(service).toBeTruthy();
  });
});
