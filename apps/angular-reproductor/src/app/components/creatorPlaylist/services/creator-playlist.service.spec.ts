import { TestBed } from '@angular/core/testing';

import { CreatorPlaylistService } from './creator-playlist.service';

describe('CreatorPlaylistService', () => {
  let service: CreatorPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
