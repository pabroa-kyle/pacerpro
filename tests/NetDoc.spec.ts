import { test, expect } from '@playwright/test';
import { NetDoc } from '../pages/NetDoc';

test('Verify that NEF uploads to DMS', async ({ page }) => {
    const netDoc = new NetDoc(page); 

    await netDoc.goTo();
    await netDoc.logIn("michael.nera@codevelopr.com", "Pword123!@#"); 

    // Navigate to Mike Folder
    await netDoc.favBtn(); 

    // Search Client Matter (Pass required parameters)
    await netDoc.clientMatterButton("1012"); 

    await page.pause();
});
