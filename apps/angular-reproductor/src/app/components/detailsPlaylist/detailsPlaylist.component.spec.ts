import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPlaylistComponent } from './detailsPlaylist.component';

describe('DetailsPlaylistComponent', () => {
  let component: DetailsPlaylistComponent;
  let fixture: ComponentFixture<DetailsPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPlaylistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
