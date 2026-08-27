CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  industry TEXT NOT NULL CHECK (char_length(industry) BETWEEN 1 AND 100),
  use_cases JSONB NOT NULL CHECK (
    jsonb_typeof(use_cases) = 'array'
    AND jsonb_array_length(use_cases) = 3
  ),
  notes TEXT NOT NULL DEFAULT '' CHECK (char_length(notes) <= 2000),
  environment TEXT NOT NULL CHECK (
    environment IN ('production', 'preview', 'development')
  ),
  source TEXT NOT NULL DEFAULT 'multiagentdebates.com',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  digest_sent_at TIMESTAMPTZ,
  CONSTRAINT waitlist_submissions_environment_email_key
    UNIQUE (environment, email)
);

CREATE INDEX IF NOT EXISTS waitlist_submissions_pending_digest_idx
  ON waitlist_submissions (updated_at, id)
  WHERE environment = 'production' AND digest_sent_at IS NULL;

