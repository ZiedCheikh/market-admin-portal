import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  imports: [RouterModule, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './launchpad.component.html',
  styleUrl: './launchpad.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchpadComponent {
  title = 'Launchpad update Startup Market';

  logout() {
    window.location.href = '/logout';
  }
}
