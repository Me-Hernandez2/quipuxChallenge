import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatorPlaylistComponent } from './creator-playlist.component';

describe('CratorPlaylistComponent', () => {
  let component: CreatorPlaylistComponent;
  let fixture: ComponentFixture<CreatorPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorPlaylistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
