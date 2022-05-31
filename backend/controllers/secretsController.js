import asyncHandler from 'express-async-handler';

/**
 * @description: Fetches a the tiny mce text editor api key
 * @route        GET /api/integrations/tinymce
 * @access       Private
 */
const getTinyMCEKey = asyncHandler(async (req, res) => {
  res.json(process.env.TINYMCE_KEY);
});

export { getTinyMCEKey };
