allow_k8s_contexts(k8s_context())
default_registry("registry.homelab.monster/evebot")

# Containers
docker_build("registry.homelab.monster/evebot/scheduler", ".", build_args={"APP": "scheduler"})
docker_build("registry.homelab.monster/evebot/status-sync", ".", build_args={"APP": "status-sync"})
docker_build("registry.homelab.monster/evebot/alliance-sync", ".", build_args={"APP": "alliance-sync"})
docker_build("registry.homelab.monster/evebot/assets-sync", ".", build_args={"APP": "assets-sync"})
docker_build("registry.homelab.monster/evebot/bookmark-sync", ".", build_args={"APP": "bookmark-sync"})
docker_build("registry.homelab.monster/evebot/calendar-sync", ".", build_args={"APP": "calendar-sync"})
docker_build("registry.homelab.monster/evebot/character-sync", ".", build_args={"APP": "character-sync"})
docker_build("registry.homelab.monster/evebot/clone-sync", ".", build_args={"APP": "clone-sync"})
docker_build("registry.homelab.monster/evebot/contact-sync", ".", build_args={"APP": "contact-sync"})
docker_build("registry.homelab.monster/evebot/corporation-sync", ".", build_args={"APP": "corporation-sync"})
docker_build("registry.homelab.monster/evebot/dogma-sync", ".", build_args={"APP": "dogma-sync"})
docker_build("registry.homelab.monster/evebot/fitting-sync", ".", build_args={"APP": "fitting-sync"})
docker_build("registry.homelab.monster/evebot/fleet-sync", ".", build_args={"APP": "fleet-sync"})
docker_build("registry.homelab.monster/evebot/fw-sync", ".", build_args={"APP": "fw-sync"})
docker_build("registry.homelab.monster/evebot/incursion-sync", ".", build_args={"APP": "incursion-sync"})
docker_build("registry.homelab.monster/evebot/industry-sync", ".", build_args={"APP": "industry-sync"})
docker_build("registry.homelab.monster/evebot/killmail-sync", ".", build_args={"APP": "killmail-sync"})
docker_build("registry.homelab.monster/evebot/location-sync", ".", build_args={"APP": "location-sync"})
docker_build("registry.homelab.monster/evebot/loyalty-sync", ".", build_args={"APP": "loyalty-sync"})
docker_build("registry.homelab.monster/evebot/mail-sync", ".", build_args={"APP": "mail-sync"})
docker_build("registry.homelab.monster/evebot/market-sync", ".", build_args={"APP": "market-sync"})
docker_build("registry.homelab.monster/evebot/opportunity-sync", ".", build_args={"APP": "opportunity-sync"})
docker_build("registry.homelab.monster/evebot/pi-sync", ".", build_args={"APP": "pi-sync"})
docker_build("registry.homelab.monster/evebot/skill-sync", ".", build_args={"APP": "skill-sync"})
docker_build("registry.homelab.monster/evebot/sov-sync", ".", build_args={"APP": "sov-sync"})
docker_build("registry.homelab.monster/evebot/universe-sync", ".", build_args={"APP": "universe-sync"})
docker_build("registry.homelab.monster/evebot/wallet-sync", ".", build_args={"APP": "wallet-sync"})
docker_build("registry.homelab.monster/evebot/war-sync", ".", build_args={"APP": "war-sync"})


# Services
k8s_yaml(["deploy/scheduler/deployment.yml", "deploy/scheduler/service.yml"])
k8s_resource(workload='scheduler', port_forwards=8888)

k8s_yaml(["deploy/status-sync/deployment.yml", "deploy/status-sync/service.yml"])