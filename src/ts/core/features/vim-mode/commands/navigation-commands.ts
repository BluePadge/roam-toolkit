import {nimap, nmap, nvmap, RoamVim} from 'src/core/features/vim-mode/vim'
import {RoamPanel} from 'src/core/features/vim-mode/roam/roam-panel'
import {closePageReferenceView, expandLastBreadcrumb} from 'src/core/roam/references'

export const NavigationCommands = [
    nvmap('k', 'Select Block Up', () => RoamVim.jumpBlocksInFocusedPanel(-1)),
    nvmap('j', 'Select Block Down', () => RoamVim.jumpBlocksInFocusedPanel(1)),
    nmap('shift+h', 'Select First Visible Block', () => RoamPanel.selected().selectFirstVisibleBlock()),
    nmap('shift+l', 'Select Last Visible Block', () => RoamPanel.selected().selectLastVisibleBlock()),
    nmap('g g', 'Select First Block', () => RoamPanel.selected().selectFirstBlock()),
    nmap('shift+g', 'Select Last Block', () => RoamPanel.selected().selectLastBlock()),
    nmap('ctrl+u', 'Select Many Blocks Up', () => RoamVim.jumpBlocksInFocusedPanel(-8)),
    nmap('ctrl+d', 'Select Many Blocks Down', () => RoamVim.jumpBlocksInFocusedPanel(8)),
    nvmap('ctrl+p', 'Scroll Up', () => RoamPanel.selected().scrollAndReselectBlockToStayVisible(-50)),
    // Avoid insert mode, to allow native ctrl-e to go to end of line
    nvmap('ctrl+n', 'Scroll Down', () => RoamPanel.selected().scrollAndReselectBlockToStayVisible(50)),
    nvmap('ctrl+o', 'Back', () => window.history.back()),
    nimap('alt+z', 'Expand Last Reference Breadcrumb', expandLastBreadcrumb),
    nmap('shift+z', 'Collapse the view for the page in references (or query) section', closePageReferenceView),
]
