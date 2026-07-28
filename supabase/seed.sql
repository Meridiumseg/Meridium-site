-- ============================================================
-- Dados iniciais da MERIDIUM
-- Rode depois do schema.sql, no mesmo SQL Editor.
-- ============================================================

insert into services (tier, title, items, featured, sort_order) values
('TIER 01', 'Essencial',
 E'Diagnóstico inicial de conformidade\nDocumentação legal obrigatória\nOrientação técnica pontual',
 false, 1),
('TIER 02', 'Avançado',
 E'Gestão documental completa\nTreinamentos e integração de equipe\nVisitas técnicas periódicas\nAcompanhamento de auditorias',
 true, 2),
('TIER 03', 'Enterprise',
 E'SST como serviço contínuo (PJ)\nPresença técnica dedicada\nGestão de risco por unidade operacional',
 false, 3);

insert into projects (code, category, title, description, sort_order) values
('SST-2026-014', 'Segurança', 'Adequação de linha de produção — Montadora',
 'Diagnóstico e adequação de máquinas conforme NR-12, com laudo técnico e plano de ação executado.', 1),
('SST-2026-009', 'Consultoria', 'Programa de Gerenciamento de Riscos (PGR)',
 'Elaboração e implantação de PGR para indústria de médio porte, com treinamento de equipe interna.', 2),
('SST-2025-031', 'Engenharia', 'Projeto de trabalho em altura — NR-35',
 'Especificação de sistemas de ancoragem e procedimentos operacionais para manutenção industrial.', 3),
('SST-2025-027', 'Segurança', 'Auditoria de canteiro de obras — NR-18',
 'Inspeção completa e relatório de não conformidades com plano corretivo priorizado.', 4),
('SST-2025-019', 'Tecnologia', 'Digitalização de documentação de SESMT',
 'Estruturação digital de arquivos técnicos e certificados, com organização por categoria e busca.', 5);

insert into news (published_date, title, description, sort_order) values
('10 JUL 2026', 'Atualização da NR-12 e impactos para pequenas indústrias',
 'Resumo técnico das principais mudanças e prazos de adequação para operações de médio porte.', 1),
('02 JUN 2026', 'MERIDIUM participa de encontro regional de segurança do trabalho',
 'Discussões sobre gestão de risco industrial em Rondônia e boas práticas de campo.', 2),
('18 MAI 2026', 'Novo modelo de atendimento contínuo (Tier Enterprise)',
 'Lançamento do modelo de consultoria dedicada para grupos com múltiplas unidades operacionais.', 3);

insert into team_members (name, role, bio, photo_url, sort_order) values
('Douglas de Paula', 'Diretor Executivo · Técnico em Segurança do Trabalho',
 'Especialista em conformidade normativa e gestão de risco industrial em Rondônia.',
 '/team/douglas.jpg', 1);

insert into legislation (name, sort_order) values
('NR-04 · SESMT', 1),
('NR-12 · Máquinas e equipamentos', 2),
('NR-18 · Construção civil', 3),
('NR-35 · Trabalho em altura', 4),
('NR-06 · EPI', 5),
('NR-17 · Ergonomia', 6);

insert into contact_info (id, phone, email, address, hours) values
(1, '(69) 9.9207-4021', 'douglas.depaula.sst@gmail.com',
 'Rua Limeira, 2655 — Bairro JK, Ji-Paraná/RO',
 'Segunda a sexta, 08h às 18h')
on conflict (id) do update set
  phone = excluded.phone,
  email = excluded.email,
  address = excluded.address,
  hours = excluded.hours;
